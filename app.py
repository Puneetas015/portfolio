import streamlit as st
import os
import zipfile
from pathlib import Path

# Title of the Streamlit App
st.title("Portfolio Project Manager")
st.subheader("Processing local files for 'portfolio_puneet'")

# Hardcoded absolute path to your exact project folder
TARGET_DIR = r"C:\Users\Punit Tiwari\Downloads\portfolio_puneet\portfolio"

st.info(f"Targeting Project Directory: `{TARGET_DIR}`")

# Check if the path exists on your machine
if os.path.exists(TARGET_DIR):
    st.success("Project folder successfully located!")
    
    # 1. Display the existing directory structure
    st.write("### 📂 Project Folder Structure:")
    
    structure = []
    for root, dirs, files in os.walk(TARGET_DIR):
        # Skipping heavy node_modules if they exist later to keep it clean
        if "node_modules" in dirs:
            dirs.remove("node_modules")
            
        level = root.replace(TARGET_DIR, '').count(os.sep)
        indent = ' ' * 4 * (level)
        structure.append(f"{indent}📁 {os.path.basename(root)}/")
        sub_indent = ' ' * 4 * (level + 1)
        for f in files:
            structure.append(f"{sub_indent}📄 {f}")
            
    st.code("\n".join(structure), language="text")

    # 2. Package/Process the folder inside Streamlit
    st.write("### 📦 Package Project")
    if st.button("Compress & Prepare Project ZIP"):
        zip_output_path = os.path.join(os.path.dirname(TARGET_DIR), "portfolio_export.zip")
        
        with zipfile.ZipFile(zip_output_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk(TARGET_DIR):
                for file in files:
                    file_path = os.path.join(root, file)
                    # Create a relative path to keep the internal folder structure clean
                    relative_path = os.path.relpath(file_path, TARGET_DIR)
                    zipf.write(file_path, relative_path)
                    
        st.success(f"Successfully created deployment package at:\n`{zip_output_path}`")
        
        # Provide a download button directly inside the app web UI
        with open(zip_output_path, "rb") as f:
            st.download_button(
                label="📥 Download Portfolio Project ZIP",
                data=f,
                file_name="portfolio_project.zip",
                mime="application/zip"
            )
else:
    st.error(f"Directory not found! Please check if the path is exactly: {TARGET_DIR}")