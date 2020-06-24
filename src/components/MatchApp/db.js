const database = {
  games: [
    {
      name: "Warpman",
      id: 1,
      year: 1985,
      developer: "Namco",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    },
    {
      name: "Super C",
      id: 2,
      year: 1990,
      developer: "Konami",
      gameMode: [
        "Contra Team Speed"
      ]
    },
    {
      name: "Abarenbou Tengu",
      id: 3,
      year: 1990,
      developer: "Meldac",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    },
    {
      name: "Ice Climber",
      id: 4,
      year: 1984,
      developer: "Nintendo",
      gameMode: [
        "Power Climbing"
      ]
    },
    {
      name: "Track & Field",
      id: 5,
      year: 1987,
      developer: "Konami",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    },
    {
      id: 6,
      name: "Dr Mario",
      year: 1990,
      developer: "Nintendo",
      gameMode: [
        "Tag Team",
        "DeathMatch"
      ]
    },
    {
      name: "Balloon Fight",
      id: 7,
      year: 1987,
      developer: "Nintendo",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    },
    {
      name: "Zanac",
      id: 8,
      year: 1986,
      developer: "Pony Inc",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    },
    {
      name: "Bomberman",
      id: 9,
      year: 1987,
      developer: "Hudson Soft",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    },
    {
      name: "Ice Hockey",
      id: 10,
      year: 1988,
      developer: "Nintendo",
      gameMode: [
        "Low Pressing Game"
      ]
    },
    {
      name: "Pac-Man",
      id: 11,
      year: 1984,
      developer: "Namco",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    },
    {
      id: 12,
      name: "Defender II",
      year: 1988,
      developer: "HAL America",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    },
    {
      name: "Field Combat",
      id: 13,
      year: 1985,
      developer: "Jaleco",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    },
    {
      name: "Star Soldier",
      id: 14,
      year: 1988,
      developer: "Hudson Soft",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    },
    {
      name: "F1 Race",
      id: 15,
      year: 1984,
      developer: "Nintendo",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    },
    {
      name: "City Connection",
      id: 16,
      year: 1985,
      developer: "Jaleco",
      gameMode: [
        "TagTeam",
        "DeathMatch"
      ]
    }
  ],
  teams: [
    {
      id: 1,
      name: "Amarena",
      estDate: "23-04-2018",
      players: [
        "Pieseu",
        "Dred",
        "Preki"
      ],
      genre: "Shumps",
      logo: "static/amarena.png",
      teamColor: "#FAB23C",
      stats: {
        averageAge: 25.6,
        galagaRatio: 0.49,
        allMatches: 6,
        allWins: 0,
        allLoses: 6,
        allGames: 26,
        wonGames: 8,
        lostGames: 18,
        winsInRow: 0,
        awards: "Group stage"
      }
    },
    {
      id: 2,
      name: "Famikillers",
      estDate: "13-04-2017",
      "players": [
        "Krisuroku",
        "Helper",
        "Gargi"
      ],
      genre: "Platform",
      logo: "static/famikillers.png",
      teamColor: "#DB2017",
      stats: {
        averageAge: 31.3,
        galagaRatio: 0.88,
        allMatches: 11,
        allWins: 3,
        allLoses: 8,
        allGames: 42,
        wonGames: 14,
        lostGames: 28,
        winsInRow: 3,
        awards: "Semifinal CFL#1"
      }
    },
    {
      id: 3,
      name: "Grecka z Gwinta",
      estDate: "11-04-2017",
      "players": [
        "daf",
        "MWK",
        "Lio"
      ],
      genre: "Platform",
      logo: "static/grecka_z_gwinta.png",
      teamColor: "#1B60AB",
      stats: {
        averageAge: 36,
        galagaRatio: 1.3,
        allMatches: 15,
        allWins: 12,
        allLoses: 3,
        allGames: 51,
        wonGames: 39,
        lostGames: 12,
        winsInRow: 10,
        awards: "3rd place CFL#1/CFL#2/CFL#3"
      }
    },
    {
      id: 4,
      name: "Mecenasi z Piaseczna",
      estDate: "16-02-2019",
      "players": [
        "Osa",
        "Arek",
        "1990in1"
      ],
      genre: "Puzzle",
      logo: "static/mecenasi_z_piaseczna.png",
      teamColor: "#3EBB63",
      stats: {
        averageAge: 32,
        galagaRatio: 0.99,
        allMatches: 5,
        allWins: 3,
        allLoses: 2,
        allGames: 21,
        wonGames: 11,
        lostGames: 10,
        winsInRow: 0,
        awards: "Semifinal CFL#3"
      }
    },
    {
      id: 5,
      name: "The Resistance",
      estDate: "11-04-2017",
      "players": [
        "dziat",
        "kompocki",
        "Piła*T"
      ],
      genre: "Platform",
      logo: "static/the_resistance.png",
      teamColor: "#FFFF00",
      stats: {
        averageAge: 28,
        galagaRatio: 0.27,
        allMatches: 8,
        allWins: 1,
        allLoses: 7,
        allGames: 26,
        wonGames: 5,
        lostGames: 21,
        winsInRow: 1,
        awards: "Group stage"
      }
    },
    {
      id: 6,
      name: "Wnuki Siudyma",
      estDate: "16-04-2017",
      "players": [
        "Mejs",
        "MaarioS",
        "Robi"
      ],
      genre: "Shump",
      logo: "static/wnuki_siudyma.png",
      teamColor: "#3D3B46",
      stats: {
        averageAge: 25,
        galagaRatio: 1.2,
        allMatches: 14,
        allWins: 10,
        allLoses: 4,
        allGames: 56,
        wonGames: 36,
        lostGames: 20,
        winsInRow: 5,
        awards: "Winners CFL#2 Runners Up CFL#1/CFL#3"
      }
    },
    {
      id: 7,
      name: "Z Życia Wzięci",
      estDate: "23-04-2017",
      "players": [
        "Nielogiczny",
        "Rocket",
        "Zelas"
      ],
      genre: "Puzzle",
      logo: "static/z_życia_wzięci.png",
      teamColor: "#F12F21",
      stats: {
        averageAge: 33.6,
        galagaRatio: 1.75,
        allMatches: 14,
        allWins: 11,
        allLoses: 3,
        allGames: 56,
        wonGames: 38,
        lostGames: 18,
        winsInRow: 5,
        awards: "Winners CFL#1/CFL#3 Runners Up CFL#2"
      }
    },
    {
      id: 8,
      name: "PozNinjaki",
      estDate: "02-07-2018",
      "players": [
        "Martin",
        "Mięsny",
        "Kuba / Bartas"
      ],
      genre: "Puzzle",
      logo: "static/pozninjaki.png",
      teamColor: "#27A1DC",
      stats: {
        averageAge: 31,
        galagaRatio: 0,
        allMatches: 5,
        allWins: 2,
        allLoses: 3,
        allGames: 21,
        wonGames: 8,
        lostGames: 13,
        winsInRow: 1,
        awards: "Semifinal CFL#2"
      }
    }
  ],
  schedule: [
    {
      id: 1,
      group: "green",
      time: "16:00",
      team1: "PozNinjaki",
      team1ID: 8,
      scoreTeam1: 0,
      team2: "Z Życia Wzięci",
      team2ID: 7,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 2,
      group: "red",
      time: "16:15",
      team1: "Wnuki Siudyma",
      team1ID: 6,
      scoreTeam1: 0,
      team2: "Famikillers",
      team2ID: 2,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 3,
      group: "green",
      time: "16:30",
      team1: "Mecenasi z Piaseczna",
      team1ID: 4,
      scoreTeam1: 0,
      team2: "The Resistance",
      team2ID: 5,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 4,
      group: "red",
      time: "16:45",
      team1: "Grecka z Gwinta",
      team1ID: 3,
      scoreTeam1: 0,
      team2: "Amarena",
      team2ID: 1,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 5,
      group: "green",
      time: "17:00",
      team1: "Mecenasi z Piaseczna",
      team1ID: 4,
      scoreTeam1: 0,
      team2: "PozNinjaki",
      team2ID: 8,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 6,
      group: "red",
      time: "17:15",
      team1: "Grecka z Gwinta",
      team1ID: 3,
      scoreTeam1: 0,
      team2: "Wnuki Siudyma",
      team2ID: 6,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 7,
      group: "green",
      time: "17:30",
      team1: "Z Życia Wzięci",
      team1ID: 7,
      scoreTeam1: 0,
      team2: "The Resistance",
      team2ID: 5,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 8,
      group: "red",
      time: "17:45",
      team1: "Famikillers",
      team1ID: 2,
      scoreTeam1: 0,
      team2: "Amarena",
      team2ID: 1,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 9,
      group: "green",
      time: "18:00",
      team1: "The Resistance",
      team1ID: 5,
      scoreTeam1: 0,
      team2: "PozNinjaki",
      team2ID: 8,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 10,
      group: "red",
      time: "18:15",
      team1: "Amarena",
      team1ID: 1,
      scoreTeam1: 0,
      team2: "Wnuki Siudyma",
      team2ID: 6,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 11,
      group: "green",
      time: "18:30",
      team1: "Z Życia Wzięci",
      team1ID: 7,
      scoreTeam1: 0,
      team2: "Mecenasi z Piaseczna",
      team2ID: 4,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 12,
      group: "red",
      time: "18:45",
      team1: "Famikillers",
      team1ID: 2,
      scoreTeam1: 0,
      team2: "Grecka z Gwinta",
      team2ID: 3,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 13,
      group: "rgba(6, 174, 213)",
      time: "19:00",
      team1: "Team1",
      team1ID: null,
      scoreTeam1: 0,
      team2: "Team2",
      team2ID: null,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 14,
      group: "rgba(6, 174, 213)",
      time: "19:15",
      team1: "Team1",
      team1ID: null,
      scoreTeam1: 0,
      team2: "Team2",
      team2ID: null,
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 15,
      group: "rgba(205, 127, 50)",
      time: "19:30",
      team1: "Team1",
      team1ID: "",
      scoreTeam1: 0,
      team2: "Team2",
      team2ID: "",
      scoreTeam2: 0,
      winner: null
    },
    {
      id: 16,
      group: "gold",
      time: "19:45",
      team1: "Team1",
      team1ID: "",
      scoreTeam1: 0,
      team2: "Team2",
      team2ID: "",
      scoreTeam2: 0,
      winner: null
    }
  ],
  standings: [
    [
      {
        id: 8,
        name: "PozNinjaki",
        matches: 0,
        points: 0,
        gamesFor: 0,
        gamesAgainst: 0
      },
      {
        id: 7,
        name: "Z Życia Wzięci",
        matches: 0,
        points: 0,
        gamesFor: 0,
        gamesAgainst: 0
      },
      {
        id: 4,
        name: "Mecenasi z Piaseczna",
        matches: 0,
        points: 0,
        gamesFor: 0,
        gamesAgainst: 0
      },
      {
        id: 5,
        name: "The Resistance",
        matches: 0,
        points: 0,
        gamesFor: 0,
        gamesAgainst: 0
      }
    ],
    [
      {
        id: 6,
        name: "Wnuki Siudyma",
        matches: 0,
        points: 0,
        gamesFor: 0,
        gamesAgainst: 0
      },
      {
        id: 2,
        name: "Famikillers",
        matches: 0,
        points: 0,
        gamesFor: 0,
        gamesAgainst: 0
      },
      {
        id: 3,
        name: "Grecka z Gwinta",
        matches: 0,
        points: 0,
        gamesFor: 0,
        gamesAgainst: 0
      },
      {
        id: 1,
        name: "Amarena",
        matches: 0,
        points: 0,
        gamesFor: 0,
        gamesAgainst: 0
      }
    ]
  ]
}

export default database