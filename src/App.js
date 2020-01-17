import React from 'react';
import Hero from '@pxblue/react-components/core/Hero';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import InfoListItem from '@pxblue/react-components/core/InfoListItem';
import ScoreCard from '@pxblue/react-components/core/ScoreCard';
import CardData from "./data";
import  "./style.css";

import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { ChevronRight, MoreVert, Info, Notifications, CloudCircle, NotificationsActive } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import {  Temp, Flow, GasCylinder,  Moisture as Humidity } from '@pxblue/icons-mui';
import Grid from "@material-ui/core/Grid";

import top from './topology_40.png';

export default () => (
    <div style={{ maxWidth: '100%' }}>
        <div  className="root-container">
            <Grid container  className="main-container" spacing={3}>
        {CardData.map(CardDataList => {
            
           return  <Grid item xs={12} sm={8} md={4}>
               <ScoreCard
                style={{ maxWidth: 400 }}
                headerColor={CardDataList.alarmCount > 0 ? Colors.red[500] : Colors.blue[500]}
                headerBackgroundImage={top}
                headerTitle={CardDataList.title}
                headerSubtitle={CardDataList.subtitle}
                headerInfo={CardDataList.deviceCount + ' Devices'}
                headerFontColor={Colors.white[50]}
                actionItems={[
                    <MoreVert onClick={() => alert('something did')} />,
                ]}
                badge={
                    <HeroBanner className="hero-container" style={{ minWidth: 210 }}>
                        <Hero
                            icon={CardDataList.values.temperature > 0 ? <Temp fontSize={'inherit'} htmlColor={Colors.black[500]} /> : <Flow fontSize={'inherit'} htmlColor={Colors.black[500]} /> }
                            label={CardDataList.values.temperature > 0 ? 'Temperature': 'Flow'}
                            iconSize={48}
                            value={CardDataList.values.temperature > 0 ? CardDataList.values.temperature : CardDataList.values.volume }
                            units={CardDataList.values.temperature > 0 ? '°F': 'KSCFH'}
                            fontSize={'normal'}
                        />
                        <Hero
                            icon={CardDataList.values.humidity > 0 ? <Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} /> :  <GasCylinder fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                            label={CardDataList.values.temperature > 0 ? 'Humidity': 'Volume'} 
                            value={CardDataList.values.temperature > 0 ? CardDataList.values.humidity: CardDataList.values.flow} 
                            units={CardDataList.values.temperature > 0 ? '%': 'KSCF'} 
                            iconSize={48}
                            fontSize={'normal'}
                        />
                    </HeroBanner>
                }
                badgeOffset={0}
                actionRow={
                    <List style={{margin: 0}}>
                        <ListItem>
                            <ListItemText primary="View Location" />
                            <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                }
            >
                <List style={{ padding: '16px 0' }}>
                    <InfoListItem dense style={{ height: 36 }}
                        fontColor={CardDataList.alarmCount > 0 ? Colors.red[500] :Colors.black[500] } 
                        iconColor={CardDataList.alarmCount > 0 ? Colors.red[500] :Colors.black[500] } 
                        title={CardDataList.alarmCount > 0 ? CardDataList.alarmCount + ' Alarm' : CardDataList.alarmCount + ' Alarms'}
                        icon={CardDataList.alarmCount > 0 ? <NotificationsActive color={'inherit'} /> : <Notifications color={'inherit'} />} 
                    />
                    <InfoListItem dense style={{ height: 36 }}
                        fontColor={CardDataList.eventCount > 0 ? Colors.blue[500] :Colors.black[500] } 
                        iconColor={CardDataList.eventCount> 0 ? Colors.blue[500] :Colors.black[500] } 
                        title= {CardDataList.eventCount > 0 ? CardDataList.eventCount + " Events" : CardDataList.eventCount +  " Event"}
                        icon={<Info color={'inherit'} />}
                    />
                    <InfoListItem dense style={{ height: 36 }}
                        title={CardDataList.commStatus}
                        icon={<CloudCircle color={'inherit'} />}
                    />
                </List>
                
              </ScoreCard>
              </Grid>  
        })
    }    
    
    </Grid> 
          </div>

    </div >
);

