import React from 'react';
import {Calendar as CustomCalendar, LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/color';
import {rh} from '../../utils/responsive';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    ' Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesshort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

const Calendar: React.FC = () => {
  return (
    <CustomCalendar
      renderArrow={direction => (
        <Icon
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          color={colors.text}
          size={rh(18)}
        />
      )}
      headerStyle={{
        backgroundColor: colors.background_secondary,
        borderBottomWdth: 0.5,
        borderBottomColor: colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontSize: 10,
      }}
      arrowStyle={{
        marginHorizontal: -15,
      }}
      firstDay={1}
      minDate={new Date()}
    />
  );
};

export default Calendar;
