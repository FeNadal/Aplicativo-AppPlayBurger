import React from "react";
import { ScrollView } from 'react-native';

import Detalhes from './componente/Detalhes/';
import Topo from './componente/Topo/';

export default function Index({ topo, detalhes }) {
  return (
    <ScrollView>
      <Topo {...topo} />
      <Detalhes detalhes={detalhes} />
    </ScrollView>
  );
}
