import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["CW18", "CW18", "CW18", "CW18"],
  datasets: [
    {
      data: [60, 22, 100, 50]
    }
  ]
};

const chartConfig = {
  backgroundColor: "#ffffff",
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  decimalPlaces: 2,
  color: (opacity = 1) => rgba(33, 97, 140,),
  labelColor: (opacity = 1) => rgba(0, 0, 0, ${opacity}),
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726"
  }
};

const PaymentsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payments</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.recentActivityContainerss}>
      </View>
      <View style={styles.recentActivityContainer}>
        <Text style={styles.sectionTitle}>Weekly</Text>
      </View>
      <View style={styles.chartContainer}>
        <BarChart
          data={data}
          width={screenWidth - 30}
          height={220}
          yAxisLabel="BDT "
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>
      <View style={styles.recentActivityContainer}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
      </View>
      <Text style={styles.noActivityText}>There was no working activity</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  chartContainer: {
    padding: 15,
    backgroundColor: 'white', // Light blue background for "Weekly" section
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentActivityContainerss: {
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#7D7D7D',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  recentActivityContainer: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E5E7E9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  noActivityText: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 14,
    color: '#888',
  },
});

export default PaymentsScreen;