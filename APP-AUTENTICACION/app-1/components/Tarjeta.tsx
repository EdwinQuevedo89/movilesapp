import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Tarjeta(props: any) {
  const { titulo, descripcion, anio, image } = props.datos;  // Asegúrate de que 'image' es el nombre correcto en tu JSON
  
  // Verifica si 'image' existe
  if (!titulo || !descripcion || !anio || !image) {
    return <Text>Datos incompletos</Text>; // Si faltan datos, muestra un mensaje
  }

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>

      {/* Verifica si 'image' existe y carga la imagen */}
      {image ? (
        <Image
          source={{ uri: image }}  // 'image' es el campo de la URL de la imagen
          style={styles.imagen}
          resizeMode="cover"
        />
      ) : (
        <Text>Imagen no disponible</Text> // Muestra este texto si la imagen no está disponible
      )}

      <Text style={styles.descripcion}>{descripcion}</Text>
      <Text style={styles.anio}>Año: {anio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e6f7ff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  imagen: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  anio: {
    fontStyle: 'italic',
    color: '#666',
  },
});
