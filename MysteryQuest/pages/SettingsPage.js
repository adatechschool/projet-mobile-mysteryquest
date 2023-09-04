import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";
import Svg, { G, Path, Rect } from "react-native-svg";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-native";
import { fontScale } from "nativewind";

function SettingPage() {
  const navigate = useNavigate();

  const cross = (
    <Svg
      style={styles.cross}
      width="35"
      height="25"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2.275 22.75L0 20.475L9.1 11.375L0 2.275L2.275 0L11.375 9.1L20.475 0L22.75 2.275L13.65 11.375L22.75 20.475L20.475 22.75L11.375 13.65L2.275 22.75Z"
        fill="#EAB308"
        fill-opacity="0.74"
      />
    </Svg>
  );
  const home = (
    <Svg
      width="70px"
      height="70px"
      viewBox="-2.5 -2.5 30.00 30.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
    >
      <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></G>
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M6.5 8.75V18.5H18.5V8.75M4.5 10L12.5 5L20.5 10M14.5 18.5V11.5H10.5V18.5"
          stroke="#EAB308"
        ></Path>
      </G>
    </Svg>
  );
  const rules = (
    <Svg
      width="60"
      height="35px"
      viewBox="0 0 41 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M39.648 2.40805C39.6391 2.40805 39.6391 2.40805 39.648 2.40805H36.9797V1.50063C36.9977 1.14126 36.7641 0.817819 36.4137 0.718991C34.5719 0.233834 32.6672 -0.00874367 30.7625 0.000240704C27.627 0.000240704 23.3594 0.710006 20.1969 3.91743C17.0613 0.674069 12.7578 0.000240704 9.63125 0.000240704C7.72656 -0.00874367 5.82188 0.233834 3.98008 0.718991C3.63867 0.817819 3.40508 1.14126 3.41406 1.50063V2.39907H0.781641C0.350391 2.39907 0 2.74946 0 3.18071V28.2112C0 28.6424 0.350391 28.9928 0.781641 28.9928C0.916406 28.9928 1.05117 28.9569 1.16797 28.894C1.24883 28.8581 9.0832 24.5725 20.0262 27.3307H20.143H20.2148C20.2777 27.3397 20.3406 27.3397 20.4035 27.3307C31.3734 24.5456 39.2078 28.8311 39.2617 28.894C39.5043 29.0377 39.8008 29.0377 40.0434 28.894C40.2859 28.7592 40.4297 28.4987 40.4387 28.2202V3.19868C40.4297 2.75844 40.0793 2.40805 39.648 2.40805ZM1.56328 26.9713V3.98032H3.43203V23.6381C3.42305 24.0694 3.77344 24.4288 4.20469 24.4288C4.24961 24.4288 4.28555 24.4288 4.33047 24.4198C5.94766 24.1682 7.5918 24.0424 9.22695 24.0245C11.5 23.9885 13.7641 24.3299 15.9203 25.0397C11.0598 24.4467 6.10938 25.1116 1.56328 26.9713ZM9.23594 22.4612C7.80742 22.4612 6.38789 22.56 4.96836 22.7397V2.12055C6.4957 1.77915 8.05 1.60844 9.61328 1.59946C12.5422 1.59946 16.5852 2.27329 19.3973 5.43579L19.4242 24.9588C17.798 23.8987 14.6176 22.4612 9.23594 22.4612ZM20.9965 5.44477C23.7996 2.30922 27.8426 1.60844 30.7805 1.60844C32.3438 1.61743 33.898 1.78813 35.4254 2.12954V22.7487C34.0148 22.569 32.6043 22.4702 31.1848 22.4702C25.8391 22.4702 22.6496 23.9077 20.9965 24.9678V5.44477ZM38.8574 26.9713C34.3023 25.1116 29.343 24.4377 24.4645 25.0397C26.6297 24.3299 28.9027 23.9885 31.1848 24.0245C32.8379 24.0334 34.482 24.1592 36.1172 24.4108C36.5484 24.4737 36.9437 24.1772 37.0066 23.7549C37.0156 23.71 37.0156 23.6741 37.0156 23.6291V3.98032H38.8844L38.8574 26.9713Z"
        fill="#EAB308"
      />
    </Svg>
  );
  const trophy = (
    <Svg
      width="60px"
      height="50px"
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></G>
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M19 9C19 10.45 18.57 11.78 17.83 12.89C16.75 14.49 15.04 15.62 13.05 15.91C12.71 15.97 12.36 16 12 16C11.64 16 11.29 15.97 10.95 15.91C8.96 15.62 7.25 14.49 6.17 12.89C5.43 11.78 5 10.45 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9Z"
          stroke="#EAB308"
          stroke-width="0.528"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></Path>
        <Path
          d="M21.25 18.47L19.6 18.86C19.23 18.95 18.94 19.23 18.86 19.6L18.51 21.07C18.32 21.87 17.3 22.11 16.77 21.48L12 16L7.22996 21.49C6.69996 22.12 5.67996 21.88 5.48996 21.08L5.13996 19.61C5.04996 19.24 4.75996 18.95 4.39996 18.87L2.74996 18.48C1.98996 18.3 1.71996 17.35 2.26996 16.8L6.16996 12.9C7.24996 14.5 8.95996 15.63 10.95 15.92C11.29 15.98 11.64 16.01 12 16.01C12.36 16.01 12.71 15.98 13.05 15.92C15.04 15.63 16.75 14.5 17.83 12.9L21.73 16.8C22.28 17.34 22.01 18.29 21.25 18.47Z"
          stroke="#EAB308"
          stroke-width="0.528"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></Path>
        <Path
          d="M12.58 5.98L13.17 7.15999C13.25 7.31999 13.46 7.48 13.65 7.51L14.72 7.68999C15.4 7.79999 15.56 8.3 15.07 8.79L14.24 9.61998C14.1 9.75998 14.02 10.03 14.07 10.23L14.31 11.26C14.5 12.07 14.07 12.39 13.35 11.96L12.35 11.37C12.17 11.26 11.87 11.26 11.69 11.37L10.69 11.96C9.96997 12.38 9.53997 12.07 9.72997 11.26L9.96997 10.23C10.01 10.04 9.93997 9.75998 9.79997 9.61998L8.96997 8.79C8.47997 8.3 8.63997 7.80999 9.31997 7.68999L10.39 7.51C10.57 7.48 10.78 7.31999 10.86 7.15999L11.45 5.98C11.74 5.34 12.26 5.34 12.58 5.98Z"
          stroke="#EAB308"
          stroke-width="0.528"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></Path>
      </G>
    </Svg>
  );
  const ladder = (
    <Svg
      width="60"
      height="30"
      viewBox="0 0 54 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="18"
        y="1"
        width="18"
        height="26"
        rx="1"
        stroke="#EAB308"
        stroke-width="2"
      />
      <Rect
        x="38"
        y="19"
        width="15"
        height="8"
        rx="1"
        stroke="#EAB308"
        stroke-width="2"
      />
      <Rect
        x="1"
        y="10"
        width="15"
        height="17"
        rx="1"
        stroke="#EAB308"
        stroke-width="2"
      />
    </Svg>
  );
  const profil = (
    <Svg
      width="50px"
      height="55px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#EAB308"
    >
      <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#EAB308"
        stroke-width="0.96"
      ></G>
      <G id="SVGRepo_iconCarrier">
        <G id="layer1">
          <Path
            d="M 9.9980469 0 L 9.328125 0.0234375 L 8.6621094 0.08984375 L 8 0.203125 L 8 2.2539062 L 7.4628906 2.4121094 L 6.9375 2.609375 L 6.4277344 2.8398438 L 5.9375 3.1074219 L 4.4863281 1.6582031 L 3.9375 2.046875 L 3.4199219 2.4707031 L 2.9296875 2.9296875 L 2.4726562 3.4179688 L 2.046875 3.9394531 L 1.6582031 4.484375 L 3.1074219 5.9375 L 2.8417969 6.4296875 L 2.609375 6.9394531 L 2.4140625 7.4628906 L 2.2539062 8 L 0.203125 8 L 0.091796875 8.6621094 L 0.0234375 9.3300781 L 0 10 L 0.0234375 10.669922 L 0.091796875 11.339844 L 0.203125 12 L 2.2539062 12 L 2.4140625 12.539062 L 2.609375 13.060547 L 2.8417969 13.570312 L 3.1074219 14.064453 L 1.6582031 15.515625 L 2.046875 16.060547 L 2.4726562 16.582031 L 2.9296875 17.070312 L 3.4199219 17.529297 L 3.9375 17.953125 L 4.4863281 18.341797 L 5.9375 16.892578 L 6.4277344 17.160156 L 6.9375 17.390625 L 7.4628906 17.587891 L 8 17.746094 L 8 19.796875 L 8.6621094 19.910156 L 9.328125 19.978516 L 9.9980469 20 L 10.671875 19.978516 L 11.337891 19.910156 L 12 19.796875 L 12 17.746094 L 12.537109 17.587891 L 13.0625 17.390625 L 13.572266 17.160156 L 14.0625 16.892578 L 15.513672 18.341797 L 16.058594 17.953125 L 16.580078 17.529297 L 17.070312 17.070312 L 17.527344 16.582031 L 17.953125 16.060547 L 18.341797 15.515625 L 16.888672 14.064453 L 17.158203 13.570312 L 17.390625 13.060547 L 17.585938 12.539062 L 17.746094 12 L 19.796875 12 L 19.908203 11.339844 L 19.976562 10.669922 L 20 10 L 19.976562 9.3300781 L 19.908203 8.6621094 L 19.796875 8 L 17.746094 8 L 17.585938 7.4628906 L 17.390625 6.9394531 L 17.158203 6.4296875 L 16.888672 5.9375 L 18.341797 4.484375 L 17.953125 3.9394531 L 17.527344 3.4179688 L 17.070312 2.9296875 L 16.580078 2.4707031 L 16.058594 2.046875 L 15.513672 1.6582031 L 14.0625 3.1074219 L 13.572266 2.8398438 L 13.0625 2.609375 L 12.537109 2.4121094 L 12 2.2539062 L 12 0.203125 L 11.337891 0.08984375 L 10.671875 0.0234375 L 9.9980469 0 z M 9.6640625 1.0058594 L 10.333984 1.0058594 L 11 1.0566406 L 11 3.0722656 L 11.572266 3.1796875 L 12.130859 3.3320312 L 12.677734 3.5332031 L 13.207031 3.7773438 L 13.710938 4.0644531 L 14.191406 4.3925781 L 15.617188 2.96875 L 16.123047 3.4042969 L 16.595703 3.875 L 17.03125 4.3828125 L 15.605469 5.8085938 L 15.933594 6.2871094 L 16.222656 6.7949219 L 16.466797 7.3222656 L 16.666016 7.8671875 L 16.820312 8.4296875 L 16.925781 8.9980469 L 18.943359 8.9980469 L 18.994141 9.6660156 L 18.994141 10.333984 L 18.943359 11.001953 L 16.925781 11.001953 L 16.820312 11.570312 L 16.666016 12.132812 L 16.466797 12.679688 L 16.222656 13.208984 L 15.933594 13.712891 L 15.605469 14.193359 L 17.03125 15.617188 L 16.595703 16.125 L 16.123047 16.597656 L 15.617188 17.03125 L 14.191406 15.607422 L 13.710938 15.935547 L 13.207031 16.222656 L 12.677734 16.46875 L 12.130859 16.667969 L 11.572266 16.820312 L 11 16.927734 L 11 18.943359 L 10.333984 18.994141 L 9.6640625 18.994141 L 9 18.943359 L 9 16.927734 L 8.4277344 16.820312 L 7.8671875 16.667969 L 7.3222656 16.46875 L 6.7929688 16.222656 L 6.2890625 15.935547 L 5.8085938 15.607422 L 4.3828125 17.03125 L 3.8769531 16.597656 L 3.4042969 16.125 L 2.96875 15.617188 L 4.3945312 14.193359 L 4.0664062 13.712891 L 3.7773438 13.208984 L 3.5332031 12.679688 L 3.3339844 12.132812 L 3.1796875 11.570312 L 3.0703125 11.001953 L 1.0566406 11.001953 L 1.0058594 10.333984 L 1.0058594 9.6660156 L 1.0566406 8.9980469 L 3.0703125 8.9980469 L 3.1796875 8.4296875 L 3.3339844 7.8671875 L 3.5332031 7.3222656 L 3.7773438 6.7949219 L 4.0664062 6.2871094 L 4.3945312 5.8085938 L 2.96875 4.3828125 L 3.4042969 3.875 L 3.8769531 3.4042969 L 4.3828125 2.96875 L 5.8085938 4.3925781 L 6.2890625 4.0644531 L 6.7929688 3.7773438 L 7.3222656 3.5332031 L 7.8671875 3.3320312 L 8.4277344 3.1796875 L 9 3.0722656 L 9 1.0566406 L 9.6640625 1.0058594 z M 9.9980469 6.0019531 L 9.5175781 6.0292969 L 9.0429688 6.1171875 L 8.5820312 6.2617188 L 8.140625 6.4589844 L 7.7285156 6.7070312 L 7.3476562 7.0078125 L 7.0058594 7.3496094 L 6.7070312 7.7265625 L 6.4570312 8.1425781 L 6.2597656 8.5820312 L 6.1152344 9.0429688 L 6.0292969 9.5195312 L 6 10 L 6.0292969 10.484375 L 6.1152344 10.957031 L 6.2597656 11.417969 L 6.4570312 11.859375 L 6.7070312 12.273438 L 7.0058594 12.654297 L 7.3476562 12.996094 L 7.7285156 13.292969 L 8.140625 13.541016 L 8.5820312 13.742188 L 9.0429688 13.882812 L 9.5175781 13.970703 L 9.9980469 14.001953 L 10.482422 13.970703 L 10.957031 13.882812 L 11.417969 13.742188 L 11.859375 13.541016 L 12.271484 13.292969 L 12.652344 12.996094 L 12.994141 12.654297 L 13.291016 12.273438 L 13.542969 11.859375 L 13.740234 11.417969 L 13.884766 10.957031 L 13.970703 10.484375 L 14 10 L 13.970703 9.5195312 L 13.884766 9.0429688 L 13.740234 8.5820312 L 13.542969 8.1425781 L 13.291016 7.7265625 L 12.994141 7.3496094 L 12.652344 7.0078125 L 12.271484 6.7070312 L 11.859375 6.4589844 L 11.417969 6.2617188 L 10.957031 6.1171875 L 10.482422 6.0292969 L 9.9980469 6.0019531 z M 9.796875 7.0078125 L 10.203125 7.0078125 L 10.611328 7.0625 L 11.003906 7.1738281 L 11.380859 7.3359375 L 11.730469 7.5488281 L 12.046875 7.8085938 L 12.326172 8.1054688 L 12.5625 8.4414062 L 12.751953 8.8046875 L 12.888672 9.1914062 L 12.972656 9.59375 L 12.998047 10 L 12.972656 10.410156 L 12.888672 10.808594 L 12.751953 11.195312 L 12.5625 11.558594 L 12.326172 11.894531 L 12.046875 12.193359 L 11.730469 12.451172 L 11.380859 12.664062 L 11.003906 12.828125 L 10.611328 12.9375 L 10.203125 12.992188 L 9.796875 12.992188 L 9.3886719 12.9375 L 8.9941406 12.828125 L 8.6191406 12.664062 L 8.2695312 12.451172 L 7.9511719 12.193359 L 7.6738281 11.894531 L 7.4375 11.558594 L 7.2480469 11.195312 L 7.1113281 10.808594 L 7.0273438 10.410156 L 7.0019531 10 L 7.0273438 9.59375 L 7.1113281 9.1914062 L 7.2480469 8.8046875 L 7.4375 8.4414062 L 7.6738281 8.1054688 L 7.9511719 7.8085938 L 8.2695312 7.5488281 L 8.6191406 7.3359375 L 8.9941406 7.1738281 L 9.3886719 7.0625 L 9.796875 7.0078125 z "
            style="fill:#222222; fill-opacity:1;  stroke-width:0.1;"
          ></Path>
        </G>
      </G>
    </Svg>
  );
  return (
    <View style={styles.background}>
      <TouchableOpacity style={styles.closeMenu} onPress={() => navigate(-1)}>
        {cross}
      </TouchableOpacity>
      <View>
        <View style={styles.userName}>
          <Image></Image>
          <Text style={styles.userName}>Username</Text>
          <Text style={styles.userPoint}>1200 points</Text>
        </View>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigate("/HomePage")}
        >
          {home}
          <Text style={styles.insideButtonAccueil}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigate("/RulesPage")}
        >
          {rules}
          <Text style={styles.insideButton}>Règles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigate("/TrophyPage")}
        >
          {trophy}
          <Text style={styles.insideButton}>Trophées</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigate("/RankingPage")}
        >
          {ladder}
          <Text style={styles.insideButton}>Classement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigate("/ProfilePage")}
        >
          {profil}
          <Text style={styles.insideButton}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  userName: {
    fontSize: 40,
    fontFamily: "Baskerville",
    marginLeft: 25,
    color: "#EAB308",
  },
  userPoint: {
    fontSize: 23,
    fontFamily: "Baskerville",
    marginLeft: 25,
    color: "#EAB308",
  },
  insideButtonAccueil: {
    fontSize: 40,
    fontFamily: "Baskerville",
    marginLeft: 25,
    color: "#EAB308",
    paddingTop: 12,
    bottom: -2,
  },
  background: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Opacité appliquée ici
    borderRadius: 25, // Appliquez la bordure au fond flou
    padding: 10, // Ajoutez un espacement autour du fond flou
  },
  closeMenu: {
    flexDirection: "column",
    alignItems: "flex-end",
    height: 35,
    position: "absolute",
    top: -45,
    right: 10,
  },
  insideButton: {
    fontSize: 40,
    fontFamily: "Baskerville",
    marginLeft: 25,
    color: "#EAB308",
  },
  items: {
    flexDirection: "row",
    padding: 15,
    margin: 1,
  },
  // container: {
  //   flexDirection: "row",
  //   backgroundColor: "white",
  //   alignItems: "center", // Aligne les éléments horizontalement au centre
  // },
  // category: {
  //   alignItems: "center", // Aligne les éléments horizontalement au centre
  //   marginVertical: 10, // Espace vertical entre les catégories
  // },
  // categoryText: {
  //   fontFamily: "Baskerville",
  //   fontSize: 28,
  //   marginTop: 5, // Espace vertical entre le logo et le texte
  // },
  // categoryContainer: {
  //   alignItems: "center"
  // }
});
export default SettingPage;
