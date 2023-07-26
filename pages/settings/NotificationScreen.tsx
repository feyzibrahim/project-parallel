import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const NotificationScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <View style={styles.content}>
        <NotificationItem
          title="New Message"
          subtitle="You have received a new message."
        />
        <NotificationItem
          title="Event Reminder"
          subtitle="You have an upcoming event tomorrow."
        />
        <NotificationItem
          title="Update Available"
          subtitle="A new version of the app is available."
        />
      </View>
    </SafeAreaView>
  );
};

type NotificationItemProps = {
  title: string;
  subtitle: string;
};

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  subtitle,
}) => {
  return (
    <View style={styles.notificationItem}>
      <View style={styles.notificationContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.forwardIconContainer}>
        <Text style={styles.forwardIcon}>➔</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  notificationContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
  forwardIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF6F6F',
  },
  forwardIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default NotificationScreen;
