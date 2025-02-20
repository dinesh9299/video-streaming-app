import React, { useState } from "react";
import ReactPlayer from "react-player";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Button, OutlinedInput } from "@mui/material";
import { IoFilterSharp } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

const Single = () => {
  const [streamurl, setStreamurl] = useState("");
  const [filteredUrls, setFilteredUrls] = useState([]);
  const [zoneFilter, setZoneFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");

  const urls = [
    {
      distno: "31",
      centerid: "12",
      zone: "zone-2",
      district: "hyd",
      cid: "4567890987",
      url: "http://192.168.1.143/hls/HF4G000170.m3u8",
    },
    {
      distno: "31",
      centerid: "12",
      zone: "zone-3",
      district: "hyd",
      cid: "4567890987",
      url: "http://192.168.1.143/hls/HF4G111976.m3u8",
    },
    // Add more items here if needed
  ];

  // Apply filters based on zone and district
  const handleApplyFilters = () => {
    const filtered = urls.filter((item) => {
      const matchesZone = zoneFilter ? item.zone === zoneFilter : true;
      const matchesDistrict = districtFilter
        ? item.district === districtFilter
        : true;
      return matchesZone && matchesDistrict;
    });
    setFilteredUrls(filtered);
  };

  return (
    <div className="text-light-text bg-light-background p-3 mt-3 rounded-md">
      <div className="grid grid-cols-5 gap-3">
        {/* Zone Filter */}
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel
            id="zone-select-label"
            sx={{
              color: "var(--light-text)",
              "&.Mui-focused": { color: "var(--light-text)" },
              fontSize: "15px",
            }}
          >
            Filter by Zone
          </InputLabel>
          <Select
            labelId="zone-select-label"
            id="zone-select"
            label="Filter by Zone"
            value={zoneFilter}
            onChange={(e) => setZoneFilter(e.target.value)}
            input={<OutlinedInput label="Filter by Zone" />}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray",
                },
              },
              "& .MuiSelect-select": {
                color: "var(--light-text)",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "var(--light-background)",
                  color: "var(--light-text)",
                  fontSize: "13px",
                },
              },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {urls.map((item, index) => (
              <MenuItem key={index} value={item.zone}>
                {item.zone}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* District Filter */}
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel
            id="district-select-label"
            sx={{
              color: "var(--light-text)",
              "&.Mui-focused": { color: "var(--light-text)" },
              fontSize: "15px",
            }}
          >
            Filter by District
          </InputLabel>
          <Select
            labelId="district-select-label"
            id="district-select"
            label="Filter by District"
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
            input={<OutlinedInput label="Filter by District" />}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray",
                },
              },
              "& .MuiSelect-select": {
                color: "var(--light-text)",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "var(--light-background)",
                  color: "var(--light-text)",
                  fontSize: "13px",
                },
              },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {urls.map((item, index) => (
              <MenuItem key={index} value={item.district}>
                {item.district}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Apply Filters Button */}
        <div className="flex items-center justify-center w-36">
          <Button
            variant="contained"
            disableElevation
            onClick={handleApplyFilters}
          >
            Apply
            <span className="ms-4">
              <IoFilterSharp />
            </span>
          </Button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-[47%_53%] gap-2">
        {/* Display filtered content */}

        {filteredUrls.length > 0 ? (
          <div>
            <div className="flex justify-between">
              <div className="text-sm">Total: {filteredUrls.length}</div>
              <div className="text-sm">
                Online:{" "}
                {filteredUrls.filter((item) => item.status === "online").length}
              </div>
              <div className="text-sm">
                Offline:{" "}
                {
                  filteredUrls.filter((item) => item.status === "offline")
                    .length
                }
              </div>
            </div>
            <div
              className="p-3 grid grid-cols-2 gap-3 custom-scrollbar overflow-y-auto"
              style={{ height: "calc(100% - 130px)" }}
            >
              {filteredUrls.map((item, index) => (
                <div
                  key={index}
                  className="bg-light-dark h-28 opacity-75 p-2 text-sm rounded-md flex flex-col gap-4"
                >
                  <div className="grid gap-2">
                    <div className="grid grid-cols-2 justify-center items-center">
                      <div className="text-xs">
                        <div style={{ fontSize: "10px" }}>
                          Dist No: {item.distno}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div style={{ fontSize: "10px" }}>
                          Center ID: {item.centerid}
                        </div>
                        <div
                          onClick={() => setStreamurl(item.url)}
                          className="p-2 cursor-pointer bg-blue-500 rounded-full flex justify-center items-center"
                          style={{ width: "25px", height: "25px" }}
                        >
                          <FaPlay size={15} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-2 justify-center items-center">
                      <div className="text-xs">
                        <div style={{ fontSize: "10px" }}>
                          Zone: {item.zone}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div style={{ fontSize: "10px" }}>
                          DT: {item.district}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: "11px" }}>CID: {item.cid}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="  p-3 grid grid-cols-2 gap-3 custom-scrollbar  overflow-y-auto "
            style={{ height: "calc(100% - 130px)" }}
          >
            {urls?.map((item, index) => (
              <div
                key={index}
                className="bg-light-dark  h-28 opacity-75 p-2 text-sm   rounded-md flex flex-col gap-4 "
              >
                <div className="grid gap-2">
                  <div className="grid grid-cols-2 justify-center items-center ">
                    <div className="text-xs">
                      <div style={{ fontSize: "10px" }}>
                        Dist No: {item.distno}
                      </div>
                    </div>
                    <div className=" flex justify-between items-center ">
                      <div style={{ fontSize: "10px" }}>
                        Center ID: {item.centerid}
                      </div>

                      <div
                        onClick={() => setStreamurl(item.url)}
                        className=" p-2 cursor-pointer bg-blue-500 rounded-full flex justify-center items-center"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <FaPlay size={15} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-2 justify-center items-center ">
                    <div className="text-xs">
                      <div style={{ fontSize: "10px" }}> Zone: {item.zone}</div>
                    </div>
                    <div className=" flex justify-between items-center ">
                      <div style={{ fontSize: "10px" }}>
                        DT:{item.district}{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: "11px" }}>CID:{item.cid} </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Player */}
        <div
          className="rounded-md mt-3 pt-2"
          style={{ height: "calc(100% - 130px)" }}
        >
          <div className="h-full pt-1 rounded-md">
            <ReactPlayer
              url={streamurl}
              playing
              controls
              height={"420px"}
              width={"100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
