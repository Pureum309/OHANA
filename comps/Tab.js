import * as React from 'react';
import { Button } from 'react-native-paper';

const UserTabView = () => (
    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
    </Button>
);

export default UserTabView;