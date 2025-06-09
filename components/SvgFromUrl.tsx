import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

type Props = {
  uri: string;
  width?: number;
  height?: number;
};

const SvgFromUrl: React.FC<Props> = ({uri, width = 100, height = 100}) => {
  const [svgXml, setSvgXml] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(uri);
        const text = await response.text();

        if (!text || !text.includes('<svg')) {
          throw new Error('Invalid SVG');
        }

        setSvgXml(text);
      } catch (err) {
        console.error(' Error fetching SVG:', err);
        setError(true);
      }
    };

    fetchSvg();
  }, [uri]);

  if (error) {
    return <Text>Не вдалося завантажити</Text>;
  }

  if (!svgXml) {
    return <ActivityIndicator size="large" />;
  }

  return <SvgXml xml={svgXml} width={width} height={height} />;
};

export default SvgFromUrl;
