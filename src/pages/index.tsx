import { Card, ColorPalette, HStack, SimpleGrid } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiAward, BiCalendar } from "react-icons/bi";
import { FaArrowTrendUp, FaGraduationCap } from "react-icons/fa6";
import { IoIosBook, IoMdPeople } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { CardBase } from "@/components/CardBase";
import { IndicatorCard } from "@/components/IndicatorCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  const recentActivities = [
    {
      id: 1,
      type: "enrollment",
      title: "Nova matrícula: Guilherme Sartori - Engenharia de Software",
      time: "2 min atrás",
    },
    {
      id: 2,
      type: "grade",
      title: "Notas lançadas: Web II - Prof. Juliano Ramos",
      time: "15 min atrás",
    },
    {
      id: 3,
      type: "course",
      title: "Novo curso criado: Análise de Dados",
      time: "1 hora atrás",
    },
    {
      id: 4,
      type: "calendar",
      title: "Evento adicionado: Semana acadêmica ADS",
      time: "2 min atrás",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      type: "exam",
      title: "Início das Provas Finais",
      color: "red",
      dateTime: "15 Dez 2025 às 08:00",
    },
    {
      id: 2,
      type: "meeting",
      title: "Reunião de Coordenadores",
      color: "blue",
      dateTime: "18 de Dez 2025 às 14:00",
    },
    {
      id: 3,
      type: "calendar",
      title: "Fim do Semestre",
      color: "orange",
      dateTime: "20 Dez 2025 às 17:00",
    },
  ];

  const iconMapActivies: Record<string, IconType> = {
    enrollment: IoMdPeople,
    grade: BiAward,
    course: IoIosBook,
    calendar: BiCalendar,
  };

  const iconMapEvents: Record<string, IconType> = {
    exam: IoAlertCircleOutline,
    meeting: IoMdPeople,
    calendar: BiCalendar,
  };

  return (
    <DefaultLayout
      title="Dashboard Acadêmico"
      description="Visão geral do sistema acadêmico"
    >
      <SimpleGrid row={2}>
        <HStack gap={6}>
          <IndicatorCard
            label="Total de Estudantes"
            value={2847}
            indicator="+12% este mês"
            icon={IoMdPeople}
            colorPallete="blue"
          />
          <IndicatorCard
            label="Professores Ativos"
            value={198}
            indicator="-3% este mês"
            icon={FaGraduationCap}
            colorPallete="green"
          />

          <IndicatorCard
            label="Cursos Oferecidos"
            value={24}
            indicator="+2% este mês"
            icon={IoIosBook}
            colorPallete="purple"
          />

          <IndicatorCard
            label="Taxa de Aprovação"
            value={0.892}
            style="percent"
            maximumFractionDigits={2}
            minimumFractionDigits={2}
            indicator="+2.1% este mês"
            icon={FaArrowTrendUp}
            colorPallete="orange"
          />
        </HStack>

        <HStack mt={8} gap={6} align="start">
          <Card.Root>
            <Card.Header>
              <Card.Title>Atividades Recentes</Card.Title>
            </Card.Header>
            <Card.Body gap={8}>
              {recentActivities.map((activity) => {
                const ActivitiesIcon =
                  iconMapActivies[activity.type] ?? AiFillQuestionCircle;
                return (
                  <CardBase
                    key={activity.id}
                    title={activity.title}
                    description={activity.time}
                    colorPallete="blue"
                    icon={ActivitiesIcon}
                  />
                );
              })}
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Card.Title>Próximos Eventos</Card.Title>
            </Card.Header>
            <Card.Body gap={8}>
              {upcomingEvents.map((event) => {
                const EventsIcon =
                  iconMapEvents[event.type] ?? AiFillQuestionCircle;
                return (
                  <CardBase
                    key={event.id}
                    title={event.title}
                    description={event.dateTime}
                    colorPallete={event.color as ColorPalette}
                    icon={EventsIcon}
                  />
                );
              })}
            </Card.Body>
          </Card.Root>
        </HStack>
      </SimpleGrid>
    </DefaultLayout>
  );
}
