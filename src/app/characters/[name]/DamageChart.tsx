import Chart, { CategoryScale } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { useContext, useState } from "react";
import { CharacterOverviewContext } from "~/contexts/CharacterOverviewContext";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

Chart.register(CategoryScale);

export default function DamageChart() {
  const { character } = useContext(CharacterOverviewContext);
  const [chartData, setChartData] = useState({
    labels: character?.damageProfiles.map((d) => d.stat),
    datasets: [
      {
        label: "Damage Profile",
        data: character?.damageProfiles.map((d) => Number(d.value.replaceAll(",", ""))),
        backgroundColor: character?.damageProfiles.map(() => getRandomColor()),
        borderColor: "rgb(63 63 70)",
        borderWidth: 1
      }
    ]
  });

  return <Pie
    data={chartData}
    options={{
      plugins: {
        legend: {
          position: "left",
          labels: {
            color: "white"
          }
        }
      }
    }}
  />
}